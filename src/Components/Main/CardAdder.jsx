import Card from "./Card";
import supabase from "../../supabase";
import { useState, useEffect } from "react";
import Loading from "./Loading";
const CardAdder = ({ searchQuery }) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchFlashcards() {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("flashcards")
        .select("*")
        .order("time", { ascending: true });
      if (!data) alert("There was an error in getting the data");
      // console.log(error);
      setIsLoading(false);
      setCards(data);
    }

    fetchFlashcards();
  }, []);

  useEffect(() => {
    const subscription = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "flashcards",
        },
        (payload) => {
          // console.log(payload);
          if (Object.keys(payload.new).length === 0) {
            setCards((prevCards) =>
              prevCards.filter((card) => card.id !== payload.old.id)
            );
          } else {
            setCards((prevCards) => [...prevCards, payload.new]);
          }
        }
      )
      .subscribe();
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const filteredItems = searchQuery
    ? cards.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
      )
    : cards;

  return (
    <>
      {isLoading && <Loading />}
      <section className="flex flex-wrap justify-center gap-10 mx-24 mt-10 md:grid-cols-2 md:grid md:mx-8 lg:mx-36 xl:grid-cols-3 xl:mx-24 2xl:grid-cols-4 2xl:mx-40">
        {!isLoading &&
          filteredItems.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              question={card.question}
              answer={card.answer}
              hint1={card.hint1}
              hint2={card.hint2}
              cardID={card.id}
            />
          ))}
      </section>
    </>
  );
};

export default CardAdder;

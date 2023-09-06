import { useState } from "react";
import supabase from "../supabase";

const AddModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    question: "",
    answer: "",
    hint1: "",
    hint2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.title.trim() !== "" &&
      formData.question.trim() !== "" &&
      formData.answer.trim() !== ""
    ) {
      // INSERT
      const { data, error } = await supabase
        .from("flashcards")
        .insert([
          {
            title: formData.title,
            question: formData.question,
            answer: formData.answer,
            hint1: formData.hint1,
            hint2: formData.hint2,
          },
        ])
        .select();

      // console.log({ data, error });

      setFormData({
        title: "",
        question: "",
        answer: "",
        hint1: "",
        hint2: "",
      });
      onClose(false);
    } else if (formData.title.length > 20) {
      alert("Title cannot be more than 10 characters");
    } else if (formData.question.length > 120) {
      alert("Question cannot be more than 120 characters");
    } else if (formData.answer.length > 20) {
      alert("Answer cannot be more than 20 characters");
    } else if (formData.hint1.length > 10 || formData.hint2.length > 10) {
      alert("Hints cannot be more than 10 characters");
    } else {
      alert(
        "Title, question and answer fields cannot be empty cannot be empty !"
      );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="flex flex-col gap-10 px-10 py-5 rounded-lg bg-slate-900 bg-opacity-90">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="text-xl font-bold text-white font-Karla">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="px-4 py-2 font-semibold tracking-wider text-white border-b-2 border-white rounded bg-slate-400 bg-opacity-60"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl font-bold text-white font-Karla">
              Question
            </label>
            <textarea
              name="question"
              value={formData.question}
              onChange={handleChange}
              className="h-24 px-4 py-2 font-semibold tracking-wider text-white border-b-2 border-white rounded bg-slate-400 bg-opacity-60"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl font-bold text-white font-Karla">
              Answer
            </label>
            <input
              type="text"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              className="px-4 py-2 font-semibold tracking-wider text-white border-b-2 border-white rounded bg-slate-400 bg-opacity-60"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl font-bold text-white font-Karla">
              Hint 1
            </label>
            <input
              type="text"
              name="hint1"
              value={formData.hint1}
              onChange={handleChange}
              className="px-4 py-2 font-semibold tracking-wider text-white border-b-2 border-white rounded bg-slate-400 bg-opacity-60"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl font-bold text-white font-Karla">
              Hint 2
            </label>
            <input
              type="text"
              name="hint2"
              value={formData.hint2}
              onChange={handleChange}
              className="px-4 py-2 font-semibold tracking-wider text-white border-b-2 border-white rounded bg-slate-400 bg-opacity-60"
            />
          </div>
          <div className="flex justify-center gap-10">
            <button
              className="px-4 py-2 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
              type="submit"
            >
              Add
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;

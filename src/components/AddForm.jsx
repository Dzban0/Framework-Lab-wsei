import { useContext, useState } from "react";
import AppContext from "../data/AppContext";

const AddForm = () => {
    const { dispatch } = useContext(AppContext);
    const [errors, setErrors] = useState([]);
    const [isSending, setIsSending] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        let newErrors = [];

        if (!data.get("name") || data.get("name").length > 50) {
            newErrors.push(
                "Name is required and should be less than 50 characters."
            );
        }

        if (!data.get("birth") || isNaN(Date.parse(data.get("birth")))) {
            newErrors.push("Valid birth date is required.");
        }

        if (!data.get("eyes") || data.get("eyes").length > 20) {
            newErrors.push(
                "Eye color is required and should be less than 20 characters."
            );
        }

        if (
            !data.get("rating") ||
            isNaN(data.get("rating")) ||
            data.get("rating") < 0 ||
            data.get("rating") > 10
        ) {
            newErrors.push("Rating must be a number between 0 and 10.");
        }

        setErrors(newErrors);

        if (newErrors.length === 0) {
            setIsSending(true);
            dispatch({
                type: "add",
                newItem: {
                    name: data.get("name"),
                    birth: data.get("birth"),
                    eyes: data.get("eyes"),
                    rating: parseInt(data.get("rating"), 10),
                },
            });
            setIsSending(false);
            e.target.reset();
        }
    };

    return (
        <div>
            <h2>Add New Object</h2>
            <form onSubmit={onSubmitHandler}>
                {errors.length > 0 && (
                    <div className="text-danger">
                        {errors.map((e, i) => (
                            <p key={i}>{e}</p>
                        ))}
                    </div>
                )}

                <label>Name</label>
                <input name="name" type="text" maxLength="50" required />

                <label>Birth Date</label>
                <input name="birth" type="date" required />

                <label>Eye Color</label>
                <input name="eyes" type="text" maxLength="20" required />

                <label>Rating</label>
                <input name="rating" type="number" min="0" max="10" required />

                <button type="submit" disabled={isSending}>
                    Add Object
                </button>
            </form>
        </div>
    );
};

export default AddForm;

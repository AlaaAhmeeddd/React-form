import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
export function Form(){
    const { register , handleSubmit ,formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log(data);
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-field">
                <label for="name">Enter your name</label>
                <input type="text" id="name" placeholder="User name" {...register("userName")}/>
                {errors.userName && <span className="error">This field is required</span>}
            </div>
            <div className="input-field">
                <label for="age">Enter your age</label>
                <input type="number" id="age" placeholder="User age" {...register("userAge")}/>
                {errors.userAge && <span className="error">This field is required and must be greater than 20</span>}
            </div>
            <div className="input-field">
                <label for="email">Enter your email</label>
                <input type="text" id="email" placeholder="User email" {...register("userEmail")}/>
                {errors.userEmail && <span className="error">This field is required and must be a valid email</span>}
            </div>
            <div className="input-field">
                <label for="question1">Question number 1</label>
                <textarea type="text" id="question1" className="question" placeholder="Write your answer..." {...register("QuestionOne")}></textarea>
                {errors.QuestionOne && <span className="error">This field is required</span>}
            </div>
            <div className="input-field">
                <label for="question2">Question number 2</label>
                <textarea type="text" id="question2" className="question" placeholder="Write your answer..." {...register("QuestionTwo")}></textarea>
                {errors.QuestionTwo && <span className="error">This field is required</span>}
            </div>
            <input type="submit" value="Submit"/>
        </form>
    )
}
const schema = yup.object().shape({
    userName: yup.string().required(),
    userAge: yup.number().positive().integer().min(21).required(),
    userEmail: yup.string().email().required(),
    QuestionOne: yup.string().required(),
    QuestionTwo: yup.string().required()
})
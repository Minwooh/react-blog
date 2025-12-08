import { Link } from "react-router-dom";
import { app } from "firebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useState } from "react";

function LoginForm() {
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const auth = getAuth(app);
            await signInWithEmailAndPassword(auth, email, password);

            toast.success("로그인에 성공했습니다.");
        } catch (error: any) {
            toast.error(error?.code);
            console.log(error);
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value },
        } = e;

        if (name === "email") {
            const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setEmail(value);
            setErrors((prev) => ({
                ...prev,
                email: !validEmail.test(value) ? "이메일 형식과 다릅니다." : "",
            }));
        }
        if (name === "password") {
            setPassword(value);
            setErrors((prev) => ({
                ...prev,
                password:
                    value.length < 8
                        ? "비밀번호는 8자리 이상으로 입력해주세요"
                        : "",
            }));
        }
    };

    return (
        <form
            action="/post"
            method="POST"
            className="form form--lg"
            onSubmit={onSubmit}
        >
            <h1 className="form__title">로그인</h1>
            <div className="form__block">
                <label htmlFor="email">이메일</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={onChange}
                    required
                />
            </div>
            <div className="form__block">
                <label htmlFor="password">비밀번호</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChange}
                    required
                />
            </div>
            {errors && errors.email?.length > 0 && (
                <div className="form__block">
                    <div className="form__error">{errors.email}</div>
                </div>
            )}
            <div className="form__block">
                계정이 없으신가요?
                <Link to="/signup" className="form__link">
                    회원가입하기
                </Link>
            </div>
            <div className="form__block">
                <input
                    type="submit"
                    value="로그인"
                    className="form__btn--submit"
                />
            </div>
        </form>
    );
}

export default LoginForm;

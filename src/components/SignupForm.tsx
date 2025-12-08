import { useState } from "react";
import { Link } from "react-router-dom";

import { app } from "firebaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function SignupForm() {
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const auth = getAuth(app);
            await createUserWithEmailAndPassword(auth, email, password);

            toast.success("회원가입에 성공했습니다.");
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
                        : passwordConfirm.length > 0 &&
                          value !== passwordConfirm
                        ? "비밀번호와 비밀번호 확인 값이 다릅니다."
                        : "",
            }));
        }
        if (name === "password_confirm") {
            setPasswordConfirm(value);
            setErrors((prev) => ({
                ...prev,
                password:
                    passwordConfirm.length > 0 && value !== password
                        ? "비밀번호와 비밀번호 확인 값이 다릅니다."
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
            <h1 className="form__title">회원가입</h1>
            {/* 이메일 */}
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
            {errors && errors.email?.length > 0 && (
                <div className="form__block">
                    <div className="form__error">{errors.email}</div>
                </div>
            )}
            {/* 비밀번호 */}
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
            {/* 비밀번호 확인 */}
            <div className="form__block">
                <label htmlFor="password_confirm">비밀번호 확인</label>
                <input
                    type="password"
                    name="password_confirm"
                    id="password_confirm"
                    value={passwordConfirm}
                    onChange={onChange}
                    required
                />
            </div>
            {errors && errors.password?.length > 0 && (
                <div className="form__block">
                    <div className="form__error">{errors.password}</div>
                </div>
            )}
            <div className="form__block">
                계정이 이미 있으신가요?
                <Link to="/signup" className="form__link">
                    로그인하기
                </Link>
            </div>
            <div className="form__block">
                <input
                    type="submit"
                    value="회원가입하기"
                    className="form__btn--submit"
                />
            </div>
        </form>
    );
}

export default SignupForm;

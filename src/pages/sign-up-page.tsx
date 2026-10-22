import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router";
import { useState } from "react";
import { useSignUp } from "@/hooks/mutations/use-sign-up.ts";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signUp } = useSignUp();

  const handleSignUpClick = () => {
    if (email.trim() === "") {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (password.trim() === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    signUp({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-xl font-bold">회원가입</div>
      <div className="flex flex-col gap-2">
        <Input
          name={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-6"
          type="email"
          placeholder="이메일"
        />
        <Input
          name={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-6"
          type="password"
          placeholder="비밀번호"
        />
      </div>
      <div>
        <Button onClick={handleSignUpClick} className="w-full">
          회원가입
        </Button>
      </div>
      <div>
        <Link className="text-muted-foreground hover:underline" to={"/sign-in"}>
          이미 계정이 있으신가요? 로그인
        </Link>
      </div>
    </div>
  );
}

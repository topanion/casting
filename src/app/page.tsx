import AuthForm from "@/components/auth/AuthForm";

export default function Home() {
  return (
    <div className="h-screen w-screen flex">
      <div className="m-auto rounded-xl bg-white p-3">
        <AuthForm />
      </div>
    </div>
  );
}

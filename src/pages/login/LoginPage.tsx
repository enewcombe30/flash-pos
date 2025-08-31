import LoginModal from "./loginModal/LoginModal";
import useLoginModal from "./loginModal/useLoginModal";

export default function LoginPage() {
  const { handleDelete, handleNumber, input, mutation, hasAccess } =
    useLoginModal();
  return (
    <div>
      <LoginModal
        handleDelete={handleDelete}
        handleNumber={handleNumber}
        input={input}
        mutation={mutation}
        hasAccess={hasAccess}
      />
    </div>
  );
}

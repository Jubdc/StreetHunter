import joke from "../assets/ezgif.com-resize.gif";

export default function NotFoundPage() {
  return (
    <div className="pb-20">
      <div className="flex flex-row justify-center font-extrabold text-6xl mb-4 text-primary mt-10 ">
        OUPS! ...
      </div>
      <div className="flex flex-row justify-center gap-40 text-4xl font-medium mt-20 ">
        <div className="mt-16">TU T'ES TROMPE D'ADRESSE </div>
        <img
          className="rounded-full shadow-2xl border-2 border-green-200 mb-10"
          alt="blague"
          src={joke}
        />
      </div>
    </div>
  );
}

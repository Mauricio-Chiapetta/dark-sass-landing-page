import EcosystemIcon from "../assets/icons/ecosystem.svg";

export function Feature({ title, description }) {
  return (
    <div className="px-5 py-10 text-center border border-white/30 rounded-xl bg-zinc-950 ">
      <div className="bg-white rounded-lg inline-flex justify-center w-14 h-14 text-black items-center">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-semibold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
}

import { socialMediaIcons } from "@/data/socialMediaIcons";
export function Footer() {
  return (
    <div className="bg-black">
      <div className="px-8">
        <div className="py-6 flex items-center justify-between flex-col sm:flex-row">
          <p className="text-white/50 font-extralight">
            &copy; Mauricio Chiapetta, All rights reserved
          </p>
          <nav className="gap-3 items-center flex">
            {socialMediaIcons.map(({ icon, id }) => (
              <a
                href="#"
                className="text-white/70 hover:text-white transition"
                key={id}
              >
                {icon}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import DiscordStatus from "./ui/discord-status";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-6xl font-semibold">Hi, I'm Pranav</h1>
          <DiscordStatus />
          <Image src="/hi.svg" alt="Hi" width={100} height={20} priority />
        </div>
        <p className="max-w-lg">
          Frontend Wizard shaping sleek, scalable interfaces — powered by logic,
          patterns, and a constant stream of music.
        </p>
      </div>
      <div className="border-2 size-36 overflow-hidden flex items-center justify-center rounded-full">
        <Image
          src="/avatar.svg"
          alt="Pranav Pokale"
          width={130}
          height={40}
          priority
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import { cn } from "@/lib/utils";

type CountryFlagProps = {
  flag: string;
  country: string;
  className?: string;
};

function flagToCountryCode(flag: string) {
  return Array.from(flag)
    .map((character) => {
      const codePoint = character.codePointAt(0);
      if (!codePoint) return "";
      return String.fromCharCode(codePoint - 127397);
    })
    .join("")
    .toLowerCase();
}

export default function CountryFlag({
  flag,
  country,
  className,
}: CountryFlagProps) {
  const countryCode = flagToCountryCode(flag);

  return (
    <span
      role="img"
      aria-label={`${country} flag`}
      title={country}
      className={cn(
        "relative inline-flex h-[18px] w-6 shrink-0 items-center justify-center overflow-hidden rounded-[3px] bg-white/10 text-[11px] leading-none",
        className,
      )}
    >
      <span aria-hidden="true">{flag}</span>
      {countryCode.length === 2 ? (
        <Image
          src={`https://flagcdn.com/w40/${countryCode}.png`}
          alt=""
          fill
          unoptimized
          sizes="24px"
          className="object-cover"
        />
      ) : null}
    </span>
  );
}

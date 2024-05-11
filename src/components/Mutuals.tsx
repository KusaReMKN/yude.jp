import Marquee from "react-fast-marquee";

export default function Mutuals() {
    const noImageBanner = `border border-4 border-fuchsia-300 bg-slate-200 pt-1.5 px-3 text-black h-12 font-bold block min-w-32 text-center text-2xl font-serif`
    const globalBanner = `h-12 w-auto inline-block`

    return (
        <Marquee
            pauseOnHover={true}
            speed={100}
        >
            <a href="https://arkw.net">
                <img
                    alt="arkw.net"
                    src="./mutual-links/arkwnet.webp"
                    className={`${globalBanner} bg-zinc-100`}
                    width={234}
                    height={60}
                />
            </a>
            <a href="https://exout.net/~kirby3ds/">
                <img
                    alt="kirby3ds"
                    src="./mutual-links/kirby3ds.webp"
                    className={`${globalBanner}`}
                    width={234}
                    height={60}
                />
            </a>
            <a href="https://kris.fail">
                <img
                    alt="kris.fail"
                    src="./mutual-links/kris_fail.webp"
                    className={`${globalBanner}`}
                    width={234}
                    height={60}
                />
            </a>
            <a href="https://kusaremkn.com">
                <img
                    alt="KusaReMKN"
                    src="./mutual-links/kusaremkn.webp"
                    className={`${globalBanner}`}
                    width={234}
                    height={60}
                />
            </a>
            <a href="https://nona-takahara.github.io/">
                <img
                    alt="nona-takahara"
                    src="./mutual-links/nona-takahara.webp"
                    className={`${globalBanner}`}
                    width={234}
                    height={60}
                />
            </a>
            <a href="https://www.pepepper.net">
                <img
                    alt="pepepper"
                    src="./mutual-links/pepepper.webp"
                    className={`${globalBanner}`}
                    width={234}
                    height={60}
                />
            </a>
            <a href="https://qqey.net">
                <img
                    alt="qqey.net"
                    src="./mutual-links/qqeynet.webp"
                    className={`${globalBanner}`}
                    width={234}
                    height={60}
                />
            </a>
            <a href="https://sasakulab.com">
                <img
                    alt="sasakulab.com"
                    src="./mutual-links/sasakulab.webp"
                    className={`${globalBanner}`}
                    width={234}
                    height={60}
                />
            </a>
            <a href="https://nullnyat.nca10.moe/">
                <img
                    alt="nullnyat"
                    src="./mutual-links/nullnyat.webp"
                    className={`${globalBanner}`}
                    width={234}
                    height={60}
                />
            </a>
            <a href="https://powerfulfamily.net/">
                <img
                    alt="powerfulfamily"
                    src="./mutual-links/powerfulfamily.webp"
                    className={`${globalBanner}`}
                    width={234}
                    height={60}
                />
            </a>
            <a href="https://zopfco.de/">
                <span className={`${noImageBanner}`}>
                    Zopfcode
                </span>
            </a>
            <a href="https://aoirint.com/">
                <span className={`${noImageBanner}`}>
                    aoirint
                </span>
            </a>
            <a href="https://fuku.day/">
                <span className={`${noImageBanner}`}>
                    Aumy
                </span>
            </a>
            <a href="https://haxibami.net">
                <span className={`${noImageBanner}`}>
                    mythfinder
                </span>
            </a>
            <a href="https://donabe8898.dev">
                <span className={`${noImageBanner}`}>
                    donabe8898.dev
                </span>
            </a>
            <a href="https://hieri.net">
                <img
                    alt="hieri"
                    src="./mutual-links/hieri.webp"
                    className={`${globalBanner}`}
                    width={234}
                    height={60}
                />
            </a>
            <a href="https://rz7.dev">
                <span className={`${noImageBanner}`}>
                    rz7.dev
                </span>
            </a>
        </Marquee>
    )
}

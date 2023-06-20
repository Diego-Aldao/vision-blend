"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import SearchBar from "@components/SearchBar/SearchBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cinzelDecorative } from "../../app/fonts/fonts";

type Props = {
  scrollTop: number;
  inicio: boolean;
};
const NavegacionMobile: React.FC<Props> = ({ scrollTop, inicio }) => {
  return (
    <div className="sm:hidden flex items-center justify-center ml-auto w-1/12">
      <Icon
        icon="ic:baseline-menu"
        className="w-7 h-7"
        color={scrollTop >= 600 || !inicio ? "#000" : "#fff"}
      />
    </div>
  );
};

const NavegacionDesktop: React.FC<Props> = ({ scrollTop, inicio }) => {
  return (
    <div className="h-full sm:flex hidden w-4/12 lg:w-3/12">
      <ul className="flex items-center justify-end w-full gap-3 md:gap-5">
        <li
          className={`${
            scrollTop >= 600 || !inicio ? "text-main-black" : "text-slate-50"
          } capitalize font-medium`}
        >
          explorar
        </li>
        <li
          className={`${
            scrollTop >= 600 || !inicio ? "text-main-black" : "text-slate-50"
          } capitalize font-medium`}
        >
          subir
        </li>
        <li className="h-full">
          <button
            className={`h-full px-5 ${
              scrollTop >= 600 || !inicio
                ? "bg-main-blue text-slate-50"
                : "bg-slate-50 text-main-blue"
            } capitalize rounded-md font-medium`}
          >
            únete
          </button>
        </li>
      </ul>
    </div>
  );
};

const Navegacion = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [oculto, setOculto] = useState<boolean>(true);
  const [inicio, setInicio] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("detalle") || pathname.includes("busqueda")) {
      setInicio(false);
    } else {
      setInicio(true);
    }
  }, [pathname]);

  useEffect(() => {
    scrollTop >= 600 || !inicio ? setOculto(false) : setOculto(true);
  }, [scrollTop, inicio]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full max-w-[1600px] mx-auto flex px-3 md:px-6 lg:px-12 py-4 h-20 items-center gap-2 transition-all ${
        scrollTop >= 600 || !inicio
          ? "fixed bg-slate-50 "
          : "absolute bg-transparent"
      } ${!inicio && "border-b-[1px] border-gray-100"} z-30 left-0 right-0 `}
    >
      <Link
        href="/"
        className="h-full flex gap-2 min-w-fit items-center justify-start w-[32px] sm:w-1/12 md:w-2/12"
      >
        <span
          className={`${
            cinzelDecorative.className
          } uppercase text-3xl sm:text-4xl tracking-tighter  ${
            scrollTop >= 600 || !inicio ? "text-main-blue" : "text-slate-50"
          }`}
        >
          vb
        </span>
        <p
          className={`hidden md:block capitalize text-sm lg:text-lg font-medium ${
            scrollTop >= 600 || !inicio ? "text-main-blue" : "text-slate-50"
          }`}
        >
          visual blend
        </p>
      </Link>
      <div className="w-9/12 sm:w-7/12 md:w-6/12 lg:w-7/12 flex h-full items-center">
        <SearchBar oculto={oculto} tipo={"imagen"} />
      </div>
      <NavegacionMobile scrollTop={scrollTop} inicio={inicio} />
      <NavegacionDesktop scrollTop={scrollTop} inicio={inicio} />
    </nav>
  );
};

export default Navegacion;

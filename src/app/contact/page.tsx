import styles from "@/app/style";
import { AiFillMail, FaLocationDot, AiFillPhone } from "../../../public/assets";
import { Wrapper } from "@/app/components";

export default function page() {
  return (
    <Wrapper>
      <main className={`${styles.flexCenter} w-full flex-grow`}>
        <section className={`${styles.boxWidth} flex flex-col mt-2`}>
          <h2 className="w-full text-center text-xl font-semibold md:text-2xl text-text dark:text-text-dark">
            Contactanos
          </h2>

          <p className="w-full text-center text-lg font-normal md:text-xl text-text-off dark:text-text-dark-off">
            Tienes alguna duda? Solo escribe el mensaje y pronto tendras una
            respuesta
          </p>

          <section
            className={`flex flex-col ss:flex-row ${styles.marginX} ${styles.marginY} shadow-lg shadow-text h-auto rounded-md`}
          >
            <section
              className={`${styles.paddingX} ${styles.paddingY} w-full ss:w-1/2 bg-bg-dark dark:bg-bg`}
            >
              <h2 className="text-xl ss:text-2xl text-text-dark dark:text-text mb-4">
                Informacion de Contacto
              </h2>

              <div className="flex items-center gap-2 mb-2">
                <AiFillMail className="text-white dark:text-black" />
                <p className="text-md md:text-lg text-text-dark dark:text-text-off">
                  info@telintec.com.mx
                </p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <FaLocationDot className="text-white dark:text-black" />
                <p className="text-md md:text-lg text-text-dark dark:text-text-off">
                  Full Address
                </p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <AiFillPhone className="text-white dark:text-black" />
                <p className="text-md md:text-lg text-text-dark dark:text-text-off">
                  +52 812 567 2045
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.225821076973!2d-100.36530872399149!3d25.696946211276654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662971c75ebabc7%3A0x67ce8076051e890b!2sTELINTEC%20SA%20DE%20CV!5e0!3m2!1ses!2smx!4v1689348877248!5m2!1ses!2smx"
                className="w-full h-96 rounded-md shadow-sm shadow-white dark:shadow-black"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
            <section className="w-full ss:w-2/3">
              <form
                className={`${styles.paddingX} ${styles.paddingY} w-full flex flex-col items-center justify-center gap-2`}
              >
                <section className="flex flex-col w-full gap-2">
                  <label htmlFor="name" className="font-semibold text-md">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ingresa tu nombre completo"
                    className="bg-white border-b border-black rounded-sm py-2 px-3 text-black lg:text-md"
                  />
                </section>

                <section className="flex flex-col w-full gap-2">
                  <label htmlFor="company" className="font-semibold text-md">
                    Empresa a la que perteneces
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Nombre de la empresa que se comunica"
                    className="bg-white border-b border-black rounded-sm py-2 px-3 text-black lg:text-md"
                  />
                </section>

                <section className="flex flex-col w-full gap-2">
                  <label htmlFor="email" className="font-semibold text-md">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="email@dominio.com"
                    id="email"
                    className="bg-white border-b border-black rounded-sm py-2 px-3 text-black lg:text-md"
                  />
                </section>

                <section className="flex flex-col w-full gap-2">
                  <label htmlFor="phone" className="font-semibold text-md">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+XX XXX XXX XXXX"
                    className="bg-white border-b border-black rounded-sm py-2 px-3 text-black lg:text-md"
                  />
                </section>

                <section className="flex flex-col w-full gap-2 mb-2">
                  <label htmlFor="message" className="">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    cols={30}
                    rows={5}
                    className="bg-white border border-black rounded-sm py-2 px-3 text-black resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </section>

                <button className="w-full bg-bg-dark dark:bg-bg px-2 py-2 lg:px-4 lg:py-3 rounded-sm font-bold text-lg lg:text-xl text-text-dark dark:text-text shadow-sm">
                  Enviar
                </button>
              </form>
            </section>
          </section>
        </section>
      </main>
    </Wrapper>
  );
}

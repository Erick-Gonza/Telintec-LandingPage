import styles from "../style";

export default function page() {
  return (
    <main className="w-full flex-grow">
      <section className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h2 className="w-full text-center text-xl font-semibold md:text-2xl">
            Contactanos
          </h2>

          <section
            className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} flex flex-col md:flex-row md:gap-[40px] items-center justify-center space-y-4`}
          >
            <section className="w-full mb-4">
              <form
                className={`${styles.paddingX} ${styles.paddingY} w-full border border-white rounded-lg flex flex-col items-center justify-center gap-2`}
              >
                <section className="flex flex-col w-full gap-2">
                  <label htmlFor="name" className="font-semibold text-md">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nombre completo"
                    className="bg-white border border-black rounded-sm py-2 px-3 text-black lg:text-md"
                  />
                </section>

                <section className="flex flex-col w-full gap-2">
                  <label htmlFor="company" className="font-semibold text-md">
                    Empresa a la que perteneces
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Nombre de la empresa"
                    className="bg-white border border-black rounded-sm py-2 px-3 text-black lg:text-md"
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
                    className="bg-white border border-black rounded-sm py-2 px-3 text-black lg:text-md"
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
                    className="bg-white border border-black rounded-sm py-2 px-3 text-black lg:text-md"
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

                <button className="w-full bg-white text-black px-2 py-2 lg:px-4 lg:py-3 rounded-sm font-bold text-lg lg:text-xl">
                  Enviar
                </button>
              </form>
            </section>

            <section className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.225821076973!2d-100.36530872399149!3d25.696946211276654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662971c75ebabc7%3A0x67ce8076051e890b!2sTELINTEC%20SA%20DE%20CV!5e0!3m2!1ses!2smx!4v1689348877248!5m2!1ses!2smx"
                className="w-full h-72 lg:h-96 rounded-sm"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}

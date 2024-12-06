// data/imgsContent.js
const daysContent = [
    {
      day: 1,
      image: "/images/img1.png",
      extraContent: (
        <div>
          <h3>¡Bienvenido a tu calendario de adviento!</h3>
          <p>Cada día traerá algo nuevo hasta el famoso día 26 jiji.</p>
          <p>¡Que empiece la cuenta regresiva! 🎉</p>
        </div>
      ),
    },
    {
      day: 2,
      image: "/images/img2.png",
      extraContent: (
        <div>
            <h3>¡FELICIDADES!</h3>
            <p>Usted ha sido seleccionado como el ganador de un fabuloso premio:</p>
            <p><em>besitos infinitos</em></p>
        </div>
      ),
    },
    {
      day: 3,
      image: "/images/img3.png",
      extraContent: (
        <div>
            <p>Diría que no quiero regalos, que solo te quiero a ti pero...</p>
            <p>es que cada día contigo es un regalo. 🥰</p>
        </div>
      ),
    },
    {
      day: 4,
      image: "/images/img4.png",
      extraContent: (
        <div>
          <p>Este vídeo representa mi estado de ánimo el 100% de las veces que no te veo 😭🥺</p>
          <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/b3rNUhDqciM?si=jyBydw1kAiRn5hA-" 
            title="Video sad"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
        ></iframe>
        </div>
      ),
    },
    {
      day: 5,
      image: "/images/img5.png",
      extraContent: (
        <div>
            <p>Hoy es un día triste. 🙁</p>
            <p>Te me has ido... lejos, muy lejos...</p>
            <p>A donde no puedo tirarte de la correa...</p>
            <p>DIGOOOOOOO</p>
            <p>Darte mucho besitos... jopeee, vuelve ya. 😭</p>
        </div>
      ),
    },
    {
      day: 6,
      image: "/images/img6.png",
      extraContent: (
        <div>
          <p>Este juego seguro que te sorprenderá. ¡Haz clic abajo para jugar!</p>
          <a
            href="https://www.youtube.com/watch?v=mCdA4bJAGGk"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#9b59b6",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Jugar ahora 🎮
          </a>
        </div>
      ),
    },
    {
      day: 7,
      image: "/images/img7.png",
      extraContent: (
        <div>
            <h3>ESTOY TRISTE Y SOLA</h3>
            <h3>SIN TI</h3>
        </div>
      ),
    },
    {
      day: 8,
      image: "/images/img8.png",
      extraContent: (
        <div>
            <p>😊 HOY VUELVE MI NOOOVIO 😊</p>
            <p>😊😊 HOY VUELVE MI NOOOVIO 😊😊</p>
            <p>😊😊😊 HOY VUELVE MI NOOOVIO 😊😊😊</p>
            <p>😊😊 HOY VUELVE MI NOOOVIO 😊😊</p>
            <p>😊 HOY VUELVE MI NOOOVIO 😊</p>
        </div>
      ),
    },
    {
      day: 9,
      image: "/images/img9.png",
      audio: "/audio/audio9.mp3",
      extraContent: (
        <div>
            <p>Oye, mira.</p>
            <p>Sí que pasa.</p>
            <p>Pasa y mucho.</p>
            <p>Y lo que pasa eres <em><strong>tú</strong></em>. ❤️🎵</p>
        </div>
      ),
    },
    {
      day: 10,
      image: "/images/img10.png",
      extraContent: (
        <div>
          <p>Haz clic en el enlace para empezar tu aventura:</p>
          <a
            href="https://www.humblebundle.com/gift?key=wdUBpfxt6GppkVSr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Jugar ahora 🎮
          </a>
        </div>
      ),
    },
    // TODO: playlist friki de youtube music
    {
      day: 11,
      image: "/images/img11.png",
      extraContent: <p>¡No te pierdas el contenido de hoy!</p>,
    },
    {
      day: 12,
      image: "/images/img12.png",
      extraContent: (
        <div>
            <p>Hoy solo quiero que sepas que estoy pensando en ti, ahora... y ahora...</p>
            <p>...</p>
            <p>Hmmmm aún sigo pensando en ti...</p>
            <p>🤔</p>
            <p>¿Sigues aquí?</p>
            <p>👀</p>
            <p>Sí, sigo pensando en ti, <em>bobi</em>.</p>
            <p><strong>COMO TOOOOOODO EL TIEMPO</strong></p>
        </div>
      ),
    },
    {
      day: 13,
      image: "/images/img13.png",
      extraContent: (
        <div>
            <p>Hoy es tu día, tu mandas.</p>
            <p>Me toca hacer lo que mi jefe (tú) digas.</p>
            <p>Ten piedad de mí... 🥺</p>
        </div>
      ),
    },
    {
      day: 14,
      image: "/images/img14.png",
      extraContent: (
        <div>
            <p>Hoy quiero endulzar tu día con un pequeño detalle. 🍫</p>
            <p>¡Espero que te guste!</p>
        </div>
      ),
    },
    {
      day: 15,
      image: "/images/img15.png",
      extraContent: (
        <div>
            <p>Oye tú.</p>
            <p>Tú y yo hoy tenemos una cita virtual.</p>
            <p>Así que ya sabes, piensa que peli/serie quieres que veamos. 📺🍿</p>
        </div>
      ),
    },
    {
      day: 16,
      image: "/images/img16.png",
      extraContent: (
        <div>
          <p>Este juego seguro que te sorprenderá. ¡Haz clic abajo para jugar!</p>
          <a
            href="https://www.humblebundle.com/gift?key=RqNUtcpFwvynvG4T"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#2196f3",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Jugar ahora 🎮
          </a>
        </div>
      ),
    },
    // TODO: playlist mía de youtube music
    {
      day: 17,
      image: "/images/img17.png",
      extraContent: <p>¡No te pierdas el contenido de hoy!</p>,
    },
    {
      day: 18,
      image: "/images/img18.png",
      extraContent: (
        <div>
            <p>Quiero que sepas que cada día contigo es mejor que el anterior. Te quiero mucho, más de lo que las palabras pueden decir.</p>
            <p style={{ fontSize: "12rem", margin: "0" }}>❤️</p>
            <p style={{ textAlign: "center", fontSize: "1.2em", fontWeight: "bold" }}>Eres lo mejor que me ha pasado.</p>
        </div>
      ),
    },
    {
      day: 19,
      image: "/images/img19.png",
      extraContent: (
        <div>
            <p>Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero - Te quiero</p>
        </div>
      ),
    },
    {
      day: 20,
      image: "/images/img20.png",
      extraContent: (
        <div>
            <p>¡Hoy es un día especial!</p>
            <p>Quiero invitarte a una cena para disfrutar juntos de una comida inolvidable. 🍽️😋</p>
        </div>
      )
    },
    // TODO: Día 21: FOTO PENDIENTE
    {
      day: 21,
      image: "/images/img21.png",
      extraContent: (
        <div>
            <p>¡La Navidad está aquí! Espero que estés listo para tu regalo.</p>
            <div>
                <img 
                  src="/images/gif.jpg" 
                  alt="Paquete de regalo" 
                  style={{ 
                    width: "100%", 
                    maxWidth: "300px", 
                    margin: "10px auto", 
                    display: "block" 
                  }} 
                />
                <p style={{ textAlign: "center", fontStyle: "italic" }}>¡La sorpresa está por llegar!</p>
            </div>
        </div>
      ),
    },
    {
      day: 22,
      image: "/images/img22.png",
      extraContent: (
        <div>
            <p>Se acerca la Navidad, ¿y sabes que significa eso?</p>
            <p>Haz hueco en tu agenda, hoy toca peli de Navidad.</p>
            <p><em>La eliges tú, graciaaas.</em></p>
        </div>
      ),
    },
    {
      day: 23,
      image: "/images/img23.png",
      extraContent:  (
        <div>
            <p>Nuestra futura casa, mira que chula.</p>
            <div>
                <img 
                  src="/images/mansion.jpg" 
                  alt="mansion" 
                  style={{ 
                    width: "100%", 
                    maxWidth: "300px", 
                    margin: "10px auto", 
                    display: "block" 
                  }} 
                />
                <p>Ahí entran perfectamente nuestros 10 perros 🐶🐶</p>
            </div>
        </div>
      ),
    },
    {
      day: 24,
      image: "/images/img24.png",
      extraContent: (
        <div>
          <p>¡El mejor regalo para cerrar este calendario! Empieza tu aventura ahora:</p>
          <a
            href="https://www.humblebundle.com/gift?key=ZzsnaFBvdCekt2YG"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#ff5722",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Jugar ahora 🎮
          </a>
        </div>
      ),
    },
    {
      day: 25,
      image: "/images/img25.png",
      extraContent: (
        <div>
            <h3>MAÑANA</h3>
            <h2>CHAN CHAN CHAAAAAAN</h2>
            <p style={{ fontSize: "1.5rem" }}>🎁🎁<span style={{ fontSize: "3rem" }}>🤶</span><span style={{ fontSize: "5rem" }}>🎄</span><span style={{ fontSize: "3rem" }}>🎅</span>🎁🎁</p>
        </div>
      ),
    },
  ];
  
  export default daysContent;
  
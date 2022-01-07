import './styles.scss'

export default function SobreMiBody() {
  return (
    <div className="show body container relative flex flex-wrap items-center justify-between p-8 mx-auto">
        {/* Left */}
        <div className="flex-col w-4/7">
          <div className="left-title flex-col">
            <h1 className="greetings items-start justify-start text-left">
              Desarrollador <span className="highlight"> Full-Stack </span>
              <br />basado en la Patagonia
            </h1>
            <div className="sobre-mi mt-5">
              Amo formar parte de projectos que tengan un<br /><span className="highlight">impacto positivo en la gente.</span><br />
            </div>
            <div className="sobre-mi mt-2">
              Me interesa todo el proceso de desarrollo<br />
              Mi meta actual es fortalecerme en el <span className="highlight"> Front-End.</span>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="">
          <svg id='hills' width="560" height="170">
            <polygon points="480,70 530, 100 560, 90 516, 40" fill="#9b9d57" />
            <polygon points="480, 70 530, 100 412, 84" fill="#7d8f57" />
            <polygon points='530, 100 412, 84 360, 138' fill='#748857' />
            <polygon points='360, 138 240, 140 320, 82' fill='#748857' />

            <polygon points='412, 84 360, 140 320, 82' fill='#88945a' />
            <polygon points='320, 82 240, 140 210, 64' fill='#597252' />
            <polygon points='300, 78 100, 100 0, 104 170, 58' fill='#597252' />
          </svg>
        </div>
      </div>
  )
}

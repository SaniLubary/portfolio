export default function MainBody() {
  return (
    <div className="show body container relative flex flex-wrap items-center justify-between p-8 mx-auto">
        {/* Left */}
        <div className="flex-col w-4/7">
          <div className="left-title flex-col overflow-visible">
            <h1 className="greetings flex relative items-start justify-start text-left">
              Hola! Soy Santi
            </h1>
            <div className="presentation overflow-visible">
              Desarrollador Web<br />
              Full - Stack
            </div>
          </div>
          <button className="download-resume-box flex items-center justify-center">
            descargar CV
          </button>
        </div>
        {/* Right */}
        <div className="flex-col w-3/7 items-start justify-start text-left">{"{modelo 3d}"}</div>
      </div>
  )
}

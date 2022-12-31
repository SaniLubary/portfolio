interface ReferenceButtonsProps {
  code: string;
  visit: string;
  rightSide: boolean;
}

interface ExperienceDetailsProps extends ReferenceButtonsProps {
  detail: any;
  imgs: any;
}

export default function ExperienceDetails({
  detail,
  imgs,
  code = "",
  visit = "",
  rightSide = false,
}: ExperienceDetailsProps) {
  return (
    <div
      className={`${
        !rightSide ? "dissapearLeft" : "dissapearRight"
      } flex flex-col`}
    >
      <div className={`w-8/12 ${rightSide && "ml-auto text-right"}`}>
        {detail}
      </div>
      <div className="flex flex-row mt-3">{imgs}</div>

      {(code || visit) && (
        <ReferenceButtons rightSide={rightSide} code={code} visit={visit} />
      )}
    </div>
  );
}

function ReferenceButtons({
  rightSide = false,
  code,
  visit,
}: ReferenceButtonsProps) {
  return (
    <div className={`mt-3 ${rightSide && "ml-auto text-right"}`}>
      {code !== "" && (
        <a target="_blank" href={code} className="reference-buttons">
          {"<"}Code {"/>"}
        </a>
      )}

      {visit !== "" && (
        <a
          target="_blank"
          href={visit}
          className={`reference-buttons ${code !== "" && "ml-3"}`}
        >
          Visit Site
        </a>
      )}
    </div>
  );
}

import resume from "@/assets/resume.png";
import Image from "next/image";

export default function UtkarshResume() {
  return (
    <div>
      <Image
        src={resume}
        alt="resume"
        layout="responsive"
        width={700}
        height={900}
      />
    </div>
  );
}

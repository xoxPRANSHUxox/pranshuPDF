import React from "react";
import EnglishChild from "./EnglishChild";
function English() {
  return (
    <div className="flex justify-center flex-wrap items-center">
       
       <EnglishChild
        pdfTitle="Article PDF 1"
        pdfDesc="It is first pdf related to Article. You can Download it by clicking below button."
        downloadLink="https://drive.google.com/file/d/19h1HowFcRAAIl3o7oOobtBL9cwDVbdR2/view?usp=drive_link"
      />

       <EnglishChild
        pdfTitle="Article PDF 2 "
        pdfDesc="It is second pdf related to direct and indirect. You can Download it by clicking below button."
        downloadLink="https://drive.google.com/file/d/14n55kgzdiyW_-boR1l3lF7ktsY751VQN/view?usp=drive_link"
      />

       <EnglishChild
        pdfTitle="Arcile PDF 3"
        pdfDesc="It is third pdf related to direct and indirect. You can Download it by clicking below button."
        downloadLink="https://drive.google.com/file/d/1zIOEOrp63v7qtKwOpXZ-epg3TTjBLT5F/view?usp=drive_link"
      />

      <EnglishChild
        pdfTitle="Direct Indirect PDF 1"
        pdfDesc="It is first pdf related to direct and indirect. You can Download it by clicking below button."
        downloadLink="https://drive.google.com/file/d/1SXTZMIO1nEZCN6v9ZDdyC4kVSHZSFIXX/view?usp=drive_link"
      />

      <EnglishChild
        pdfTitle="Direct Indirect PDF 2"
        pdfDesc="It is second pdf related to direct and indirect. You can Download it by clicking below button."
        downloadLink="https://drive.google.com/file/d/1cO_emqghsKZb58jeACeDy_taPHrSxZKM/view?usp=drive_link"
      />
    </div>
  );
}

export default English;

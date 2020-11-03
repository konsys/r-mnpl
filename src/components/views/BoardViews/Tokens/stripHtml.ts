export enum EditorStyle {
  BOLD = "BOLD",
  ITALIC = "ITALIC",
  COMBY = "COMBY",
  NO_STYLE = "NO_STYLE",
}

export const stripHtml = (html: string) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

// Use unit tests to optimaze
export const htmlToDescription = (str: string) => {
  str = str
    .replace(/<\/p>/gi, " ")
    .replace(/<p>/gi, "")
    .replace(/<br>/gi, " ")
    .replace(/<em>/gi, "<===>>")
    .replace(/<\/em>/gi, "<<===>")
    .trim();

  const resArr: any[] = [];

  const tmp = document.createElement("DIV");
  tmp.innerHTML = str;

  const parseHtml = (v: any) => {
    const text =
      v.textContent.replace(/<===>>/gi, "<em>").replace(/<<===>/gi, "</em>") ||
      "";
    const tmpStrong = document.createElement("DIV");
    tmpStrong.innerHTML = text;

    if (v.nodeName === "STRONG") {
      iterateNodes(tmpStrong, 1, EditorStyle.COMBY);
    } else {
      iterateNodes(tmpStrong, 1, EditorStyle.ITALIC);
    }
  };

  const parseComby = (v: any, type: EditorStyle) => {
    if (v.nodeName === "EM") {
      resArr.push({
        part: stripHtml(v.textContent || ""),
        style:
          type === EditorStyle.COMBY ? EditorStyle.COMBY : EditorStyle.ITALIC,
      });
    } else {
      resArr.push({
        part: stripHtml(v.textContent || ""),
        style:
          type === EditorStyle.COMBY ? EditorStyle.BOLD : EditorStyle.NO_STYLE,
      });
    }
  };

  const iterateNodes = (n: any, iteration: number, type: EditorStyle) => {
    Array.from(n.childNodes).map((v: any) => {
      if (v.childNodes.length > 1) {
        iterateNodes(v, iteration, type);
      } else {
        iteration === 0 ? parseHtml(v) : parseComby(v, type);
      }
    });
  };
  iterateNodes(tmp, 0, EditorStyle.NO_STYLE);
  return resArr;
};

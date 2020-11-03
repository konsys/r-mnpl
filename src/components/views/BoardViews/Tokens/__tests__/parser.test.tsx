import { EditorStyle, htmlToDescription } from "../stripHtml";

describe("Editor parse tests", () => {
  test("No format test", () =>
    expect(htmlToDescription("No format")).toStrictEqual([
      { part: "No format", style: EditorStyle.NO_STYLE },
    ]));

  test("Bold format test", () =>
    expect(htmlToDescription("<strong>Bold format</strong>")).toStrictEqual([
      { part: "Bold format", style: EditorStyle.BOLD },
    ]));

  test("Italic format test 1", () =>
    expect(htmlToDescription("<em>Tasty roast</em>")).toStrictEqual([
      { part: "Tasty roast", style: EditorStyle.ITALIC },
    ]));

  test("Italic format test 2", () =>
    expect(htmlToDescription("<em>Eat</em> this <em>apple</em>")).toStrictEqual(
      [
        { part: "Eat", style: EditorStyle.ITALIC },
        { part: " this ", style: EditorStyle.NO_STYLE },
        { part: "apple", style: EditorStyle.ITALIC },
      ]
    ));

  test("Combo format test", () =>
    expect(
      htmlToDescription("<strong><em>Combo format</em></strong>")
    ).toStrictEqual([{ part: "Combo format", style: EditorStyle.COMBY }]));

  test("Bold Italic test", () =>
    expect(
      htmlToDescription("<strong>Bold</strong> <em>Italic</em>")
    ).toStrictEqual([
      { part: "Bold", style: EditorStyle.BOLD },
      { part: " ", style: EditorStyle.NO_STYLE },
      { part: "Italic", style: EditorStyle.ITALIC },
    ]));

  test("Bold Italic Combo format test", () =>
    expect(
      htmlToDescription(
        "flat<strong>bold</strong><em>italic</em><strong><em>combo</em></strong>"
      )
    ).toStrictEqual([
      { part: "flat", style: EditorStyle.NO_STYLE },
      { part: "bold", style: EditorStyle.BOLD },
      { part: "italic", style: EditorStyle.ITALIC },
      { part: "combo", style: EditorStyle.COMBY },
    ]));

  test("Custom test1", () =>
    expect(
      htmlToDescription(
        "flat <strong>bold</strong> <em>italic</em><strong><em> combo</em></strong>"
      )
    ).toStrictEqual([
      { part: "flat ", style: EditorStyle.NO_STYLE },
      { part: "bold", style: EditorStyle.BOLD },
      { part: " ", style: EditorStyle.NO_STYLE },
      { part: "italic", style: EditorStyle.ITALIC },
      { part: " combo", style: EditorStyle.COMBY },
    ]));

  test("Custom test2", () =>
    expect(
      htmlToDescription(
        "<strong>bold </strong> <strong> bold</strong> <strong> bold </strong>"
      )
    ).toStrictEqual([
      { part: "bold ", style: EditorStyle.BOLD },
      { part: " ", style: EditorStyle.NO_STYLE },
      { part: " bold", style: EditorStyle.BOLD },
      { part: " ", style: EditorStyle.NO_STYLE },
      { part: " bold ", style: EditorStyle.BOLD },
    ]));

  test("Custom test3", () => {
    expect(
      htmlToDescription(
        "<strong>Вначале </strong>, наверное, <strong> было <em>слово</em></strong> <strong> bold</strong>"
      )
    ).toStrictEqual([
      { part: "Вначале ", style: EditorStyle.BOLD },
      { part: ", наверное, ", style: EditorStyle.NO_STYLE },
      { part: " было ", style: EditorStyle.BOLD },
      { part: "слово", style: EditorStyle.COMBY },
      { part: " ", style: EditorStyle.NO_STYLE },
      { part: " bold", style: EditorStyle.BOLD },
    ]);
  });

  test("Custom test4", () => {
    expect(
      htmlToDescription(
        "<strong>bold1 </strong> <strong> bold2 <em>italic</em></strong> <strong> bold3 </strong>end"
      )
    ).toStrictEqual([
      { part: "bold1 ", style: EditorStyle.BOLD },
      { part: " ", style: EditorStyle.NO_STYLE },
      { part: " bold2 ", style: EditorStyle.BOLD },
      { part: "italic", style: EditorStyle.COMBY },
      { part: " ", style: EditorStyle.NO_STYLE },
      { part: " bold3 ", style: EditorStyle.BOLD },
      { part: "end", style: EditorStyle.NO_STYLE },
    ]);
  });

  test("should parse correctly", () => {
    const parsed = htmlToDescription(
      "<p><em>профессиональный </em><strong>уход</strong> за садом. Доступные <strong><em>цены</em></strong> только у нас</p>"
    );

    expect(parsed).toStrictEqual([
      { part: "профессиональный ", style: EditorStyle.ITALIC },
      { part: "уход", style: EditorStyle.BOLD },
      { part: " за садом. Доступные ", style: EditorStyle.NO_STYLE },
      { part: "цены", style: EditorStyle.COMBY },
      { part: " только у нас", style: EditorStyle.NO_STYLE },
    ]);
  });
});

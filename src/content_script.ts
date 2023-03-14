/**
 * 画面起動時に実行されるハンドラ
 */
const liItems = document.getElementsByClassName("payslipListItem");
Array.from(liItems).forEach((el) => {
  const link = el.children[0];
  if (link instanceof HTMLAnchorElement) {
    const pdfLinkHref = link.href + "/download.pdf";
    const element = document.createElement("a");

    element.innerText = "📥";
    element.href = pdfLinkHref;
    el.appendChild(element);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  /* For every modal data component, we want to add an event listener that event listener gets the child item */
  const allModals = document.querySelectorAll("#modal");

  allModals.forEach((m) => {
    const dataId = m.dataset.micromodalId;

    const modal = document.querySelectorAll(
      `[data-micromodal-id="${dataId}"]#modal`
    )[0];

    const modalOpen = document.querySelectorAll(
      `[data-micromodal-id="${dataId}"]#modal-open`
    )[0];

    const modalClose = document.querySelectorAll(
      `[data-micromodal-id="${dataId}"]#modal-close`
    )[0];
    const modalCloseBg = document.querySelectorAll(
      `[data-micromodal-id="${dataId}"]#modal-close-bg`
    )[0];

    modalOpen.addEventListener("click", () => {
      modal.classList.add("is-open");
    });

    modalClose.addEventListener("click", () => {
      modal.classList.remove("is-open");
    });

    modalCloseBg.addEventListener("click", function (e) {
      if (e.target === this) {
        modal.classList.remove("is-open");
      }
    });
  });
});

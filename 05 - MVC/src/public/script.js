document.querySelectorAll("delete-form").forEach((element) =>
  element.addEventListener("sumbit", (ev) => {
    const confirmation = confirm("Tem certeza que deseja excluir ?");

    if (!confirmation) {
      ev.preventDefault();
    }
  }),
);

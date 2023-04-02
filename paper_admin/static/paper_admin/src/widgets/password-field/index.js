import "./index.scss";

document.addEventListener("click", event => {
    const button = event.target.closest(".password-field__button");
    if (button) {
        const widget = button.closest(".password-field");
        if (widget) {
            const input = widget.querySelector("input");
            const input_types = ["text", "password"];
            if (input) {
                const index = (input_types.indexOf(input.type) + 1) % 2;
                input.type = input_types[index];

                const icon = widget.querySelector("i");
                const icon_classes = ["bi-eye-slash", "bi-eye"];
                if (icon) {
                    icon.classList.add(icon_classes[index]);
                    icon.classList.remove(icon_classes[(index + 1) % 2]);
                }
            }
        }
    }
});

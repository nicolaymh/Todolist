//? This function return me a object which contains the classes that we are going to apply to the general title and the add button when we select a color of the options.

export const colortitleButton = (values) => {
    const { color } = values;

    switch (color) {
        case 'bg-primary':
            return {
                colorTitle: 'text-primary',
                colorButtonAdd: 'btn-primary',
            };

        case 'bg-warning':
            return {
                colorTitle: 'text-warning',
                colorButtonAdd: 'btn-warning',
            };

        case 'bg-info':
            return {
                colorTitle: 'text-info',
                colorButtonAdd: 'btn-info',
            };

        case 'bg-success':
            return {
                colorTitle: 'text-success',
                colorButtonAdd: 'btn-success',
            };

        case 'bg-danger':
            return {
                colorTitle: 'text-danger',
                colorButtonAdd: 'btn-danger',
            };

        default:
            return {
                colorTitle: 'text-secondary',
                colorButtonAdd: 'btn-secondary',
            };
    }
};

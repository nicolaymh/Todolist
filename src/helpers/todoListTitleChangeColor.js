//? Function that verifies the class that has applied the title of the tasks and depending on this removes and puts another to generate an infinite color change.

export const todoListTitleChangeColor = (title) => {
    if (title?.classList.contains('text-primary')) {
        title?.classList.remove('text-primary');
        title?.classList.add('text-warning');
    } else if (title?.classList.contains('text-warning')) {
        title?.classList.remove('text-warning');
        title?.classList.add('text-info');
    } else if (title?.classList.contains('text-info')) {
        title?.classList.remove('text-info');
        title?.classList.add('text-success');
    } else if (title?.classList.contains('text-success')) {
        title?.classList.remove('text-success');
        title?.classList.add('text-danger');
    } else {
        title?.classList.remove('text-danger');
        title?.classList.add('text-primary');
    }
};

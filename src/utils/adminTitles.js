export const compararTitulos = (path, response) => {
    const requestTitle = path.substring(path.indexOf('-') + 1);
    const responseTitle = response.toLowerCase().replace(/ /g, '-');
    return requestTitle === responseTitle;
};

export const getId = (title) => {
    const id = parseInt(title.substring(0, title.indexOf('-')));
    return id;
};

export const createLink = (section, id, title) => {
    const link = `${section}/${id}-${title.toLowerCase().replace(/ /g, '-')}`;
    return link;
};

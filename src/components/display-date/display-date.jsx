const DisplayDate = () => {
    const today = (new Date()).toLocaleDateString('fr-fr', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return (
        <span>{today}</span>
    );
};

export default DisplayDate;
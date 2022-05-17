const NewsAdd = () => {

    const dateNow = () => {
        const now = new Date();
        return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
    }

    return (
        <>
            <form>
                <input type="text" placeholder="Добавить статью" />
                <button type="submit">Добавить новость</button>
            </form>
        </>
    );
};

export default NewsAdd;
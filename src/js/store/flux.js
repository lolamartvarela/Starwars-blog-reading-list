const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            detallePlaneta: {},
        },
        actions: {

            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            obtenerPersonajes: () => {
                fetch("https://swapi.dev/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        personajes: data.results
                    }))
                    .catch(err => console.error(err))
            },

            obtenerPlanetas: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({
                        planetas: data.results
                    }))
                    .catch(err => console.error(err))
            },

            InfoPlaneta: (id) => {

                fetch("https://swapi.dev/api/planets/" + id)
                    .then((res) => res.json())
                    .then((data) => setStore({
                        detallePlaneta: data
                    }))
                    .catch((err) => console.error(err));
            },
            loadSomeData: () => {


            },
            changeColor: (index, color) => {

                const store = getStore();


                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });


                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;
const getState = ({
    getStore,
    getActions,
    setStore
}) => {

    return {
        store: {
            personajes: [],
            planetas: [],
            vehiculos: [],
            detallePersonje: {},
            detallePlaneta: {},
            detalleVehiculo: {},
            favoritos: [],

        },
        actions: {

            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            obtenerInfoPersonajes: () => {
                fetch("https://swapi.dev/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        personajes: data.results
                    }))
                    .catch(err => console.error(err))
            },

            obtenerInfoPlanetas: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({
                        planetas: data.results
                    }))
                    .catch(err => console.error(err))
            },

            obtenerInfoVehiculos: () => {
                fetch("https://swapi.dev/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({
                        vehiculos: data.results
                    }))
                    .catch(err => console.error(err))
            },

            obtenerDetallePersonaje: (id) => {

                fetch("https://swapi.dev/api/people/" + id)
                    .then((res) => res.json())
                    .then((data) => setStore({
                        detallePersonaje: data
                    }))
                    .catch((err) => console.error(err));
            },
            loadSomeData: () => {},

            obtenerDetallePlaneta: (id) => {

                fetch("https://swapi.dev/api/planets/" + id)
                    .then((res) => res.json())
                    .then((data) => setStore({
                        detallePlaneta: data
                    }))
                    .catch((err) => console.error(err));
            },
            loadSomeData: () => {},

            obtenerDetalleVehiculo: (id) => {

                fetch("https://swapi.dev/api/vehicles/" + id)
                    .then((res) => res.json())
                    .then((data) => setStore({
                        detalleVehiculo: data
                    }))
                    .catch((err) => console.error(err));
            },
            loadSomeData: () => {},

            agregarFavorito: (favoritos) => {
                let store = getStore();
                if (favoritos !== "" && !store.favoritos.includes(favoritos))
                    setStore({
                        favoritos: [...store.favoritos, favoritos]
                    })
            },

            borrarFavorito: (favoritos) => {
                let store = getStore();
                setStore({
                    favoritos: store.favoritos.filter((fav) => fav !== favoritos)
                })
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
            },
        }
    };
};

export default getState;
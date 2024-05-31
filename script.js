async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Exemple d'utilisation
iterateWithAsyncAwait([1, 2, 3, 4, 5]);
async function waitCall() {
    const data = await new Promise(resolve => {
        setTimeout(() => resolve("Données récupérées de l'API"), 2000);
    });
    console.log(data);
}

// Exemple d'utilisation
waitCall();
async function waitCall() {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5; // Simule un succès ou un échec
                if (success) {
                    resolve("Données récupérées de l'API");
                } else {
                    reject("Erreur de récupération des données");
                }
            }, 2000);
        });
        console.log(data);
    } catch (error) {
        console.error("Une erreur s'est produite : ", error);
    }
}

// Exemple d'utilisation
waitCall();
async function asyncFunction1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Fonction 1 terminée");
}

async function asyncFunction2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Fonction 2 terminée");
}

async function asyncFunction3() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Fonction 3 terminée");
}

async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}

// Exemple d'utilisation
chainedAsyncFunctions();
async function concurrentRequests() {
    const request1 = new Promise(resolve => setTimeout(() => resolve("Données de l'API 1"), 2000));
    const request2 = new Promise(resolve => setTimeout(() => resolve("Données de l'API 2"), 2000));
    
    const results = await Promise.all([request1, request2]);
    console.log("Résultats combinés : ", results);
}

// Exemple d'utilisation
concurrentRequests();
async function parallelCalls(urls) {
    const fetches = urls.map(url => fetch(url).then(response => response.json()));
    try {
        const results = await Promise.all(fetches);
        console.log("Réponses des requêtes : ", results);
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données : ", error);
    }
}

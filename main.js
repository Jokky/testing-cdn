const baseUrl = 'http://s.wine.style'

const SIZE = 100
const MIN = 1000
const MAX = 150000

const requestInit = {
    mode: 'no-cors',
}

/**
 * Get random number from range
 * @param {number} min
 * @param {number} max
 * @returns {Promise<number>} {*}
 */
const getRandomNumber = async (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Generate random url
 * @returns {Promise<string>}
 */
const getRandomUrl = async () => {
    const num = await getRandomNumber(MIN, MAX)

    return `/images_get/150/${num}/0_0_orig.jpg`
}

const main = async () => {
    const requests = []

    for (let i = 0; i < SIZE; i++) {
        const url = await getRandomUrl()
        requests.push(fetch(baseUrl + url, requestInit))
    }

    const responses = await Promise.all(requests)

    const app = document.querySelector('#app')
}

const render = (values) => {
    return values.map(renderMessage)
}

const renderMessage = (type, value) => {
    const typeClass = 'message--' + type
    `
        <div class="message ${typeClass}">
            <div class="message__code">
                ${value.code}
            </div>
            <div class="message__url">
                ${value.url}
            </div>
        </div>
    `
}

(function() {
    main().then(console.log).catch(console.error)
})()

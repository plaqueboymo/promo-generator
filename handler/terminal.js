const terminal = require('terminal-kit').terminal; 
const prompt = require('prompts')
_.log = function(message, boolean) {
    let date = new Date()
    let hrs = date.getUTCHours()
    let mins = date.getUTCMinutes()
    let secs = date.getUTCSeconds()

    Number(hrs < 10) ? hrs = `0${hrs}` : null 
    Number(mins < 10) ? mins = `0${mins}` : null 
    Number(secs < 10) ? secs = `0${secs}` : null

    if(!message) return terminal.blue(`\n|`) + terminal.white(`${hrs}:${mins}:${secs}`) + terminal.blue(`|`) + terminal.white(' Please specify a message! ')
    if(!boolean) return terminal.blue(`\n|`) + terminal.white(`${hrs}:${mins}:${secs}`) + terminal.blue(`|`) + terminal.white(' Please specify whether a new line or not! ')
    terminal.blue(`${boolean === true ? `\n` : ``}|`) + terminal.white(`${hrs}:${mins}:${secs}`) + terminal.blue(`|`) + terminal.white(` ${message} `)
}

_.prompt = async function (message) {
    let date = new Date()
    let hrs = date.getUTCHours()
    let mins = date.getUTCMinutes()
    let secs = date.getUTCSeconds()

    Number(hrs < 10) ? hrs = `0${hrs}` : null 
    Number(mins < 10) ? mins = `0${mins}` : null 
    Number(secs < 10) ? secs = `0${secs}` : null

    if(!message) return terminal.blue(`\n|`) + terminal.white(`${hrs}:${mins}:${secs}`) + terminal.blue(`|`) + terminal.white(' Please specify a message! ')
    const response = await prompt({
        type: 'text',
        name: 'value',
        message: message,
    });
    return response.value; 
}

_.error = function(message, boolean) {
    let date = new Date()
    let hrs = date.getUTCHours()
    let mins = date.getUTCMinutes()
    let secs = date.getUTCSeconds()

    Number(hrs < 10) ? hrs = `0${hrs}` : null 
    Number(mins < 10) ? mins = `0${mins}` : null 
    Number(secs < 10) ? secs = `0${secs}` : null

    if(!message) return terminal.blue(`\n|`) + terminal.white(`${hrs}:${mins}:${secs}`) + terminal.blue(`|`) + terminal.white(' Please specify a message! ')
    terminal.blue(`${boolean === true ? `\n` : ``}|`) + terminal.white(`${hrs}:${mins}:${secs}`) + terminal.blue(`|`) + terminal.red(` ${message} `) 
}

_.ascii = function () {
    terminal.red(`
    ██████╗ ██████╗  ██████╗ ███╗   ███╗ ██████╗      ██████╗ ███████╗███╗   ██╗
    ██╔══██╗██╔══██╗██╔═══██╗████╗ ████║██╔═══██╗    ██╔════╝ ██╔════╝████╗  ██║
    ██████╔╝██████╔╝██║   ██║██╔████╔██║██║   ██║    ██║  ███╗█████╗  ██╔██╗ ██║
    ██╔═══╝ ██╔══██╗██║   ██║██║╚██╔╝██║██║   ██║    ██║   ██║██╔══╝  ██║╚██╗██║
    ██║     ██║  ██║╚██████╔╝██║ ╚═╝ ██║╚██████╔╝    ╚██████╔╝███████╗██║ ╚████║
    ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝ ╚═════╝      ╚═════╝ ╚══════╝╚═╝  ╚═══╝
                             created by plaqueboymo          
    `)
}
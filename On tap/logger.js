export const TYPE_WARN = 'warn'
export const TYPE_ERROR = 'error'
export const TYPE_LOG = 'log'

function logger(log, type = TYPE_LOG) {
    console[type](type);
}
export default logger;
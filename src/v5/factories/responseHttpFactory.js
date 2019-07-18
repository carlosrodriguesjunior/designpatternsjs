class ResponseHttpFactory {

    static response(statusCode, message, body) {
        return {
            statusCode,
            body: JSON.stringify({
              message,
              body,
            }, null, 2),
          };
    }
}

module.exports = ResponseHttpFactory;
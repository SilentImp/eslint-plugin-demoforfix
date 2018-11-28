module.exports = {
    rules: {
        "no-string-classname": {
            create: function (context) {
              return {
                "CallExpression": function (node) {
                  const argument = node.arguments && node.arguments.find(element => (element.type === 'Literal'));
                  if (
                    (node.callee.name === 'classnames')
                    && ( argument !== undefined)
                  ){
                    context.report({
                      node,
                      message: "You should use css modules instead of {{identifier}}",
                      data: {
                        identifier: argument.raw,
                      }
                    })
                  }
                },
                "JSXAttribute": function (node) {
                  if (
                    (node.name.name === 'className')
                    && (node.value.type === 'Literal')
                  ) {
                    context.report({
                      node,
                      message: 'You should use css modules instead'
                    })
                  }
                },
                // give me methods

            };
            }
        }
    }
};

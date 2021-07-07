const opentelemetry = require('@opentelemetry/api')
const { NodeTracerProvider } = require('@opentelemetry/node')
const { registerInstrumentations } = require('@opentelemetry/instrumentation')
const { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express')
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http')

const { JaegerExporter } = require('@opentelemetry/exporter-jaeger')
const { SimpleSpanProcessor } = require('@opentelemetry/tracing');


const traceProvider = new NodeTracerProvider()

exporter = new JaegerExporter({
  host:'jaeger.linkerd-jaeger',
  port:'14268'

})

traceProvider.addSpanProcessor(new SimpleSpanProcessor(exporter));



traceProvider.register()


registerInstrumentations({
  instrumentations: [
    new ExpressInstrumentation(),
    new HttpInstrumentation({}),
]})



opentelemetry.trace.setGlobalTracerProvider(traceProvider)
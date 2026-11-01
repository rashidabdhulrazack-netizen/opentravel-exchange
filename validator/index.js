import fs from 'node:fs';
import path from 'node:path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

// Initialize Ajv validator with draft-2020-12 support
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const schemaPath = path.resolve('schemas/package.schema.json');
const samplePath = path.resolve('examples/kerala-backwaters-sample.json');

try {
  // Read and parse schema
  const schemaRaw = fs.readFileSync(schemaPath, 'utf8');
  const schema = JSON.parse(schemaRaw);

  // Read and parse sample travel package
  const sampleRaw = fs.readFileSync(samplePath, 'utf8');
  const sample = JSON.parse(sampleRaw);

  // Compile schema and execute validation
  const validate = ajv.compile(schema);
  const isValid = validate(sample);

  if (isValid) {
    console.log('✅ Validation successful: Sample package conforms to OTX schema.');
    console.log(`📦 Package Title: "${sample.title}"`);
    console.log(`📍 Destination: ${sample.destination.primaryCity}, ${sample.destination.country}`);
    console.log(`💰 Base Net Rate: ${sample.pricing.currency} ${sample.pricing.baseNetRate}`);
    process.exit(0);
  } else {
    console.error('❌ Validation failed with errors:');
    console.error(validate.errors);
    process.exit(1);
  }
} catch (error) {
  console.error('⚠️ Runtime Error:', error.message);
  process.exit(1);
}

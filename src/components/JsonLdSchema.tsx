import React from 'react';

interface JsonLdSchemaProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLdSchema({ schema }: JsonLdSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

create_component() {
  component_name=$1
  component_file=$component_name/$component_name.tsx
  index_file=$component_name/index.tsx

  echo "Creating $component_name..."

  if [ ! -d "$component_name" ]; then
  mkdir $component_name
  touch $index_file
  touch $component_file
  cat > $index_file <<EOL
import $component_name from './$component_name';

export default $component_name;
EOL

  cat > $component_file <<EOL
import React from 'react';

const $component_name = () => {
  return <div></div>;
};

export default $component_name;
EOL
  else
    echo "$0: Component already exists"
  fi
}

if [ $# -eq 0 ]; then
  echo "Usage: $0 <string>"
  exit 1
fi
for component in $@; do
  create_component $component
done
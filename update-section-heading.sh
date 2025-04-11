
#!/bin/bash

# Array of files to update
files=(
  "src/components/home/FeaturesSection.tsx"
  "src/components/home/HowItWorksSection.tsx"
  "src/components/home/PartnersSection.tsx"
  "src/components/home/PricingSection.tsx"
  "src/components/home/TestimonialsSection.tsx"
  "src/pages/About.tsx"
  "src/pages/Contact.tsx"
  "src/pages/Features.tsx"
  "src/pages/ForCompanies.tsx"
  "src/pages/ForJobSeekers.tsx"
  "src/pages/Pricing.tsx"
  "src/pages/Privacy.tsx"
  "src/pages/Terms.tsx"
)

# Function to replace centered with align
update_file() {
  sed -i 's/centered={true}/align="center"/g' "$1"
  sed -i 's/centered={false}/align="left"/g' "$1"
  sed -i 's/centered={boolean}/align="center"/g' "$1"
  sed -i 's/centered: true/align: "center"/g' "$1"
  sed -i 's/centered: false/align: "left"/g' "$1"
}

# Iterate through files and update
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    update_file "$file"
    echo "Updated $file"
  else
    echo "File not found: $file"
  fi
done

"""Optional OMG BPMN XSD validation. Uses standard Python plus system xmllint."""
from pathlib import Path
import subprocess
import shutil
if not shutil.which('xmllint'):
    raise SystemExit('Install libxml2/xmllint, then rerun: python3 scripts/check-bpmn-xsd.py')
for path in sorted(Path('03-processes/bpmn').glob('*.bpmn')):
    subprocess.run(['xmllint', '--noout', '--schema', 'docs/schemas/bpmn/BPMN20.xsd', str(path)], check=True)
print('PASS: all five BPMN models validate against vendored official OMG XSD.')

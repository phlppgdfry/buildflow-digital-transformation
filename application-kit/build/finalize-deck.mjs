import path from 'node:path';
import {pathToFileURL} from 'node:url';
const skill=process.env.PRESENTATIONS_SKILL_DIR;
const python=process.env.RUNTIME_PYTHON;
if(!skill||!python||!process.env.RUNTIME_NODE_MODULES)throw new Error('Set PRESENTATIONS_SKILL_DIR, RUNTIME_PYTHON and RUNTIME_NODE_MODULES to the supplied authoring runtime.');
const {finalizePresentation}=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
const final=process.env.DECK_FINAL_PATH||'application-kit/exports/interview-deck.pptx';
console.log(await finalizePresentation({workspaceDir:path.resolve('.'),candidatePath:path.resolve('.scratch/deck/candidate.pptx'),finalPath:path.resolve(final),pythonExecutable:python,integrityValidatorPath:skill+'/container_tools/inspect_presentation_package_integrity.py',layoutValidatorPath:skill+'/container_tools/inspect_presentation_layout_geometry.py',layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit','--require-native-table-slide','7','--require-native-table-slide','8'],explicitTotalSlideCount:8,requiredNativeTableOwnerSlides:[7,8],requiredNativeChartOwnerSlides:[],fontPolicy:{basis:'design',families:['Arial']},verifyArtifactToolImport:true,receiptPath:path.resolve('.scratch/deck/'+path.basename(final)+'.validation.json')}));

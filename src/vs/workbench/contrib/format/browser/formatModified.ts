/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { isNonEmptyArray } from '../../../../base/common/arrays.js';
import { CancellationToken } from '../../../../base/common/cancellation.js';
import { ICodeEditor } from '../../../../editor/browser/editorBrowser.js';
import { EditorAction, registerEditorAction, ServicesAccessor } from '../../../../editor/browser/editorExtensions.js';
import { Range } from '../../../../editor/common/core/range.js';
import { EditorContextKeys } from '../../../../editor/common/editorContextKeys.js';
import { ITextModel } from '../../../../editor/common/model.js';
// IEditorWorkerService and ITextModelService removed with SCM quick diff
// shouldSynchronizeModel removed with SCM quick diff
import { formatDocumentRangesWithSelectedProvider, FormattingMode } from '../../../../editor/contrib/format/browser/format.js';
import * as nls from '../../../../nls.js';
import { ContextKeyExpr } from '../../../../platform/contextkey/common/contextkey.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { Progress } from '../../../../platform/progress/common/progress.js';
// SCM quick diff service removed - format modified lines feature disabled

registerEditorAction(class FormatModifiedAction extends EditorAction {

	constructor() {
		super({
			id: 'editor.action.formatChanges',
			label: nls.localize2('formatChanges', "Format Modified Lines"),
			precondition: ContextKeyExpr.and(EditorContextKeys.writable, EditorContextKeys.hasDocumentSelectionFormattingProvider),
		});
	}

	async run(accessor: ServicesAccessor, editor: ICodeEditor): Promise<void> {
		const instaService = accessor.get(IInstantiationService);

		if (!editor.hasModel()) {
			return;
		}

		const ranges = await instaService.invokeFunction(getModifiedRanges, editor.getModel());
		if (isNonEmptyArray(ranges)) {
			return instaService.invokeFunction(
				formatDocumentRangesWithSelectedProvider, editor, ranges,
				FormattingMode.Explicit, Progress.None, CancellationToken.None,
				true
			);
		}
	}
});

export async function getModifiedRanges(accessor: ServicesAccessor, modified: ITextModel): Promise<Range[] | undefined | null> {
	// SCM quick diff service removed - format modified lines feature disabled
	return null;
}

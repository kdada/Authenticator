import { BusinessError } from '@kit.BasicServicesKit';
import { ComponentContent } from '@kit.ArkUI';
import { UIContext } from '@ohos.arkui.UIContext';

export class PromptActionClass {
  static ctx: UIContext;
  static contentNode: ComponentContent<Object>;
  static options: Object;

  static setContext(context: UIContext) {
    PromptActionClass.ctx = context;
  }

  static setContentNode(node: ComponentContent<Object>) {
    PromptActionClass.contentNode = node;
  }

  static setOptions(options: Object) {
    PromptActionClass.options = options;
  }

  static openDialog() {
    if (PromptActionClass.contentNode !== null) {
      PromptActionClass.ctx.getPromptAction()
        .openCustomDialog(PromptActionClass.contentNode, PromptActionClass.options)
        .then(() => {
          console.info('OpenCustomDialog complete.')
        })
        .catch((error: BusinessError) => {
          let message = (error as BusinessError).message;
          let code = (error as BusinessError).code;
          console.error(`OpenCustomDialog args error code is ${code}, message is ${message}`);
        })
    }
  }

  static closeDialog() {
    if (PromptActionClass.contentNode !== null) {
      PromptActionClass.ctx.getPromptAction()
        .closeCustomDialog(PromptActionClass.contentNode)
        .then(() => {
          console.info('CloseCustomDialog complete.')
        })
        .catch((error: BusinessError) => {
          let message = (error as BusinessError).message;
          let code = (error as BusinessError).code;
          console.error(`CloseCustomDialog args error code is ${code}, message is ${message}`);
        })
    }
  }

  static updateDialog(options: Object) {
    if (PromptActionClass.contentNode !== null) {
      PromptActionClass.ctx.getPromptAction()
        .updateCustomDialog(PromptActionClass.contentNode, options)
        .then(() => {
          console.info('UpdateCustomDialog complete.')
        })
        .catch((error: BusinessError) => {
          let message = (error as BusinessError).message;
          let code = (error as BusinessError).code;
          console.error(`UpdateCustomDialog args error code is ${code}, message is ${message}`);
        })
    }
  }
}
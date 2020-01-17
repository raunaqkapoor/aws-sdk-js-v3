import {
  SESClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SESClient";
import {
  SetIdentityFeedbackForwardingEnabledRequest,
  SetIdentityFeedbackForwardingEnabledResponse
} from "../models/index";
import {
  deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand,
  serializeAws_querySetIdentityFeedbackForwardingEnabledCommand
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type SetIdentityFeedbackForwardingEnabledCommandInput = SetIdentityFeedbackForwardingEnabledRequest;
export type SetIdentityFeedbackForwardingEnabledCommandOutput = SetIdentityFeedbackForwardingEnabledResponse;

export class SetIdentityFeedbackForwardingEnabledCommand extends $Command<
  SetIdentityFeedbackForwardingEnabledCommandInput,
  SetIdentityFeedbackForwardingEnabledCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(
    readonly input: SetIdentityFeedbackForwardingEnabledCommandInput
  ) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SetIdentityFeedbackForwardingEnabledCommandInput,
    SetIdentityFeedbackForwardingEnabledCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SetIdentityFeedbackForwardingEnabledCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_querySetIdentityFeedbackForwardingEnabledCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput> {
    return deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
import abc


class BaseState(metaclass=abc.ABCMeta):

    @abc.abstractmethod
    def successors(self):
        raise NotImplementedError()

    @abc.abstractmethod
    def equals(self, other):
        raise NotImplementedError()

    def __eq__(self, other):
        return self.equals(other)
